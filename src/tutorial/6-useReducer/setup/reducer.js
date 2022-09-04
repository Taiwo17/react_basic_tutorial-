export const reducer = (state, action) => {
  const newPeople = [...state.people, action.payload];
  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please enter a value',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  throw new Error('No matching content found');
};
