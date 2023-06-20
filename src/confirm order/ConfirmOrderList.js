import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ADDD_USER } from "../store/types/UserTypes";
import { UserActions } from "../store/actions";
import { useNavigate } from "react-router-dom";
import { inputError, preaparedOrder, user } from "../store/selectors/selectors";
import InputError from "./InputError";
import { WholeOrderPriceContext } from "../contexts/WholeOrderPrice";
import { confirmOrder } from "../store/actions/OrderActions";

export default () => {
    const [name, setName] = useState("");
    const [totalPrice, setTotalPrice] = useContext(WholeOrderPriceContext);
    const [surName, setSurName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [address, setAdress] = useState("");
    const userData = useSelector(user);
    const errorList = useSelector(inputError);
    const order = useSelector(preaparedOrder)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (userData) {
            dispatch(confirmOrder(order[0]))
            setTotalPrice(0)
            navigate("/order_success")
        }
    }, [userData])


    const onChangeName = useCallback((e) => {
        const tmp = e.target.value
        setName(tmp)
    }, [name]);

    const onChangeSurName = useCallback((e) => {
        let tmp = e.target.value
        setSurName(tmp)
    }, [surName]);

    const onChangePhone = useCallback((e) => {
        let tmp = e.target.value
        setPhone(tmp)
    }, [phone]);

    const onChangeCity = useCallback((e) => {
        let tmp = e.target.value
        setCity(tmp)
    }, [city]);

    const onChangeAddress = useCallback((e) => {
        let tmp = e.target.value
        setAdress(tmp)
    }, [address]);


    const userInfo = useMemo(() => {
        return {
            name: name,
            surName: surName,
            phone: phone,
            city: city,
            address: address
        }
    }, [name, surName, phone, city, address]);


    const submitHendler = useCallback((e) => {
        e.preventDefault()
        dispatch(UserActions.checkUser(userInfo))

    }, [userInfo]);

    return (
        <>
            <div className="confirm">Please complete the fields below to confirm your order.</div>
            <div className="confirmOrderMain">
                <form className="confirmForm" onSubmit={submitHendler} >
                    <div>
                        <div className="confirmLabels"> <label name="name">Your name</label></div>
                        <input type="text" name="name" required onChange={onChangeName}></input>
                    </div>
                    <div>
                        <div className="confirmLabels"><label name="sureName" >Your surename</label></div>
                        <input type="text" name="sureName" onChange={onChangeSurName} required></input>
                    </div>
                    <div>
                        <div className="confirmLabels"><label name="tel" >Your phone number</label></div>
                        <input type="tel" placeholder="+374XXXXXXXX" name="tel" onChange={onChangePhone} required></input>
                    </div>
                    <div>
                        <div className="confirmLabels"><label name="city" >Your city</label></div>
                        <select className="confirmSelectCity" name="city" onChange={onChangeCity} required>
                            <option>Gyumri</option>
                            <option>Artik</option>
                            <option>Maralik</option>
                            <option>Poqr Mantash</option>

                        </select>

                    </div>
                    <div>
                        <div className="confirmLabels"><label name="address" >Your address</label></div>
                        <input type="text" name="address" onChange={onChangeAddress} required></input>
                    </div>
                    {errorList && errorList.map((el, index) => <InputError key={index} text={el} />)}
                    <div className="confirmOrderDiv">
                        <button className="confirmButtons" type="submit" >Confirm order</button>
                        <button className="confirmButtons" type="reset">Reset</button>
                    </div>

                </form>
            </div>
        </>
    )
}