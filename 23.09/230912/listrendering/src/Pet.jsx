import React, { useState } from 'react'

function PetItem({pet}){
  return (
    <li>{pet.name}는 {pet.species}입니다. 그리고 {pet.age}살 입니다.</li>
  )
}

// function PetList({pets}){
//   return(
//     <ul>
//       {pets.map((item)=>{
//         return <PetItem key = {item.id} pet = {item}/>
//       })
//     }
//     </ul>
//   );
// }

function AddPetForm({setPets}){
  const [name,setName] = useState("");
  const [species,setSpecies] = useState("");
  const [age,setAge] = useState(0);

  function handleSubmit(event){
    event.preventDefault(); // submit이 될 때 자동으로 새로고침이 되는데 preventDefault로 그것을 방지한다.
    setPets((prev)=>{
      // return prev.push({name,species,age,id:Date.now()})
      // return [...prev,{name,species,age,id:Date.now()}];
      return prev.concat({name,species,age,id:Date.now()})
    });
    setName('');
    setSpecies('');
    setAge(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
      <legend>새로운 애완동물을 추가해주세요!</legend>
      <label> 이름 : 
        <input placeholder='이름' type='text' value={name} onChange={(event)=>setName(event.target.value)}></input>
      </label>
      <label> 종류 :
      <input placeholder='species' type='text' value={species} onChange={(event)=>setSpecies(event.target.value)}></input>
      </label>
      <label> 나이 : 
      <input placeholder='나이' type='number' value={age} onChange={(event)=>setAge(event.target.value)}></input>
      </label>
    <button>추가하기</button>
    </fieldset>
    </form>
  );
}


export default function Pet() {



  const [pets,setPets] = useState([
    { name: "벨라", species: "고양이", age: "5", id: 111 },
    { name: "루시", species: "강아지", age: "3", id: 112 },
    { name: "데이지", species: "토끼", age: "2", id: 113 },
    { name: "몰리", species: "고양이", age: "1", id: 114 },
    { name: "매기", species: "강아지", age: "6", id: 115 }
  ]);
  return (
    <div>
      <h1>애완동물 정보 리스트</h1>
      <AddPetForm setPets={setPets}/>
      <ul>
        {pets.map((item)=>{
        return <PetItem key = {item.id} pet = {item}/>
        })}
      </ul>
    </div>
  )
}
