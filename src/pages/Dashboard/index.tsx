import { useEffect, useState } from 'react';
import { FoodType } from '../../components/Food';
import api from '../../services/api';
import Header from '../../components/Header';


export function Dashboad() {
    const [foods, setFoods] = useState<FoodType[]>([]);
    const [editingFood, setEditingFood] = useState({} as FoodType);
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    useEffect(() => {
        async function getFoods() {
            const response = await api.get('/foods');

            setFoods(response.data);
        }
        getFoods();
    }, []);

    const handleAddFood = async (food: FoodType) => {
        try {
            const response = await api.post('/foods', {
                ...food, 
                available: true,
            });
            setFoods( state => [...state, response.data])
        } catch(err) {
            console.log(err)
        }
    }

    const handleUpdateFood = async (food: FoodType) => {
        try {
            const foodUpdated = await api.put(
                `/foods/${editingFood.id}`,
                {...editingFood, ...food}
            );

            const foodsUpdated = foods.map(food => 
                food.id !== foodUpdated.data.id ? food : foodUpdated.data,
            )

            setFoods(foodsUpdated);
        } catch(err) {
            console.log(err);
        }
    }

    const handleDelete = async (id: number) => {
        await api.delete(`/foods/${id}`);

        const foodsFiltered = foods.filter(food => food.id !== id);

        setFoods(foodsFiltered)
    }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    const toggleEditModal = () => {
        setEditModalOpen(!editModalOpen);
    }

    const handleEditFood = (food: FoodType) => {
        setEditingFood(food);
        setEditModalOpen(true);
    }

    return(
        <>
            <Header openModal={toggleModal} />
            <ModalAddFood
            isOpen={modalOpen}
            setIsOpen={toggleModal}
            handleAddFood={handleAddFood}
            />
            <ModalEditFood
            isOpen={editModalOpen}
            setIsOpen={toggleEditModal}
            editingFood={editingFood}
            handleUpdateFood={handleUpdateFood}
            />

            <FoodsContainer data-testid="foods-list">
            {foods &&
                foods.map(food => (
                <Food
                    key={food.id}
                    food={food}
                    handleDelete={handleDeleteFood}
                    handleEditFood={handleEditFood}
                />
                ))}
            </FoodsContainer>
        </>
    )
}