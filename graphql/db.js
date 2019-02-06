let actors = [
  {
    id: 0,
    name: "Tom Cruise",
    age: 57,
    gender: "male"
  },
  {
    id: 1,
    name: "Halle Berry",
    age: 53,
    gender: "female"
  },
  {
    id: 2,
    name: "Russell Crowe",
    age: 55,
    gender: "male"
  },
  {
    id: 3,
    name: "Kevin Spacey",
    age: 60,
    gender: "male"
  },
  {
    id: 4,
    name: "Morgan Freeman",
    age: 82,
    gender: "male"
  },
  {
    id: 5,
    name: "Will Smith",
    age: 51,
    gender: "male"
  },
  {
    id: 6,
    name: "Eva Mendes",
    age: 45,
    gender: "female"
  },
  {
    id: 7,
    name: "Sharon Stone",
    age: 61,
    gender: "female"
  },
  {
    id: 8,
    name: "Alice Eve",
    age: 37,
    gender: "female"
  }
];

export const getActors = () => actors;

export const getById = id => {
  const filteredActors = actors.filter(actor => actor.id === id);
  return filteredActors[0];
};

export const deleteActor = id => {
  const cleanedActors = actors.filter(actor => actor.id !== id);
  if (actors.length > cleanedActors.length) {
    actors = cleanedActors;
    return true;
  } else {
    return false;
  }
};

export const addActor = (name, age, gender) => {
  const newActor = {
    id: `${actors.length + 1}`,
    name,
    age,
    gender
  };
  actors.push(newActor);
  return newActor;
};
