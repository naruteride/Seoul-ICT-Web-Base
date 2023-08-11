import { useEffect, useState } from "react";

export default function Sample() {
    const [foods, setFoods] = useState(["싸이버거", "삼계탕", "부침개"]);

    useEffect(() => {
        const resurt = localStorage.getItem("Food List");
        console.log(resurt);
    }, []);

    return <>
        <ul>
            {foods.map((food, index) => {
                return <li key={index}>{food}</li>
            })}
            <button onClick={() => setFoods([...foods, "꽈배기"])}>
                꽈배기 추가
            </button>
            <button onClick={() => {
                localStorage.setItem("Food List", foods);
            }}>
                음식 목록 영구 저장
            </button>
        </ul>
    </>
}