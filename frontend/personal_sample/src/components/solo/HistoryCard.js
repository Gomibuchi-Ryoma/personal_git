import axios from "axios";
import React, { useEffect, useState } from "react";
import './HistoryCard.css';

function HistoryCard() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/cards/')
            .then(response => {
                console.log(response.data);
                setCards(response.data)
            })
            .catch(error => {
                console.error('Error fetching cards;', error);
            })
    }, []);

    return (
        <div className="card-container">
            {cards.map(cardData => (
                <div className="card" key={cardData.card_id}>
                    <h2>{cardData.name}の自己紹介カード</h2>
                    <div>
                        <strong>名前:</strong> {cardData.name}
                    </div>
                    <div>
                        <strong>年齢:</strong> {cardData.age}
                    </div>
                    <div>
                        <strong>誕生日:</strong> {cardData.birthday}
                    </div>
                    <div>
                        <strong>趣味:</strong> {cardData.hobby}
                    </div>
                    <div>
                        <strong>趣味のURL:</strong> {cardData.hobby_url}
                    </div>
                    <div>
                        <strong>好きな食べ物:</strong> {cardData.food}
                    </div>
                    <div>
                        <strong>得意なこと:</strong> {cardData.strong}
                    </div>
                    <div>
                        <strong>好きなスポーツ:</strong> {cardData.sports}
                    </div>
                    <div>
                        <strong>性別:</strong> {cardData.sex}
                    </div>
                </div>
            ))}
        </div>

    );
}
export default HistoryCard;