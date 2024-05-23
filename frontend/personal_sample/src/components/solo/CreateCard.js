import React,{useEffect,useState} from "react";
import { useLocation,useNavigate } from "react-router-dom";
import './CreateCard.css'
import axios from "axios";

function CreateCard(){

    const [user_id, setUser_Id] = useState(0);

    //自己紹介
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [birthday, setBirthday] = useState('');
    const [hobby, setHobby] = useState('');
    const [hobbyUrl, setHobbyUrl] = useState('');
    const [food, setFood] = useState('');
    const [strong, setStrong] = useState('');
    const [sports, setSports] = useState('');
    const [sex, setSex] = useState('');

    const location = useLocation();
    const userIdFromState = location.state ? location.state.userId : null;
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Location state:', location.state);
        if (userIdFromState !== null) {
            setUser_Id(userIdFromState);
        }
    }, [userIdFromState]);

    //Ok
    useEffect(() => {
        console.log(user_id); 
    }, [user_id]);

    //ボタン処理
    const handleSubmit = async (event) => {
        //デフォルトのリンク操作を防止
        event.preventDefault();
        // フォームデータの作成
        const formData = {
            user_id,
            name,
            age: parseInt(age),
            birthday,
            hobby,
            hobby_url: hobbyUrl,
            food,
            strong,
            sports,
            sex
        };
        console.log(formData); // フォームデータのログ出力

        try {
            const response = await axios.post('http://localhost:8080/api/cards', formData);
            console.log(response.data); // レスポンスデータの確認（デバッグ用）
            navigate('/loginSuccess')
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return(
        <div className="card-container">
            <h1>自己紹介カード作成</h1>
            <form className="card-form" onSubmit={handleSubmit}>
                <input type="hidden" value={user_id}/>
                <label>名前:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label>年齢:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />

                <label>誕生日:</label>
                <input
                    type="text"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />

                <label>趣味:</label>
                <input
                    type="text"
                    value={hobby}
                    onChange={(e) => setHobby(e.target.value)}
                    required
                />

                <label>趣味のURL:</label>
                <input
                    type="url"
                    value={hobbyUrl}
                    onChange={(e) => setHobbyUrl(e.target.value)}
                    required
                />

                <label>好きな食べ物:</label>
                <input
                    type="text"
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                    required
                />

                <label>得意なこと:</label>
                <input
                    type="text"
                    value={strong}
                    onChange={(e) => setStrong(e.target.value)}
                    required
                />

                <label>好きなスポーツ:</label>
                <input
                    type="text"
                    value={sports}
                    onChange={(e) => setSports(e.target.value)}
                    required
                />

                <label>性別:</label>
                <select
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    required
                >
                    <option value="">性別を選択してください</option>
                    <option value="男性">男性</option>
                    <option value="女性">女性</option>
                    <option value="その他">その他</option>
                </select>

                <button type="submit">送信</button>
            </form>
        </div>
    );
}
export default CreateCard;