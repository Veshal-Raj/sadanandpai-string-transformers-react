import { useEffect, useState } from 'react'
import '../App.css'

const StringTransformers = () => {
    const [inputVal, setInputVal] = useState("this is a normal sentence to transform");
    const [lowerCase, setLowerCase] = useState("")
    const [upperCase, setUpperCase] = useState("")
    const [camelCase, setCamelCase] = useState("")
    const [pascalCase, setPascalCase] = useState("")
    const [snakeCase, setSnakeCase] = useState("")
    const [kebabCase, setKebabCase] = useState("")
    const [trim, setTrim] = useState("")


    useEffect(()=> {
        toLowercase(inputVal);
        toUppercase(inputVal);
        toCamelCase();
        toPascalCase();
        toSnakeCase();
        toKebabCase();
        toTrim();
    }, [inputVal])

    const toLowercase = (inputVal) => {
        setLowerCase(inputVal.toLowerCase());
    }

    const toUppercase = (inputVal) => {
        setUpperCase(inputVal.toUpperCase());
    }

    const toCamelCase = () => {
        let arr = inputVal.split(" ");
        let str = "";
        for (let i=0; i<arr.length; i++) {
            if (i > 0) {
                let fLetter = arr[i].charAt(0).toUpperCase();
                let letters = arr[i].slice(1).toLowerCase();
                let fullLetters = fLetter + letters;
                str += fullLetters;
            } else {
                str += arr[i];
            }
        }
        setCamelCase(str);
    }

    const toPascalCase = () => {
        let arr = inputVal.split(" ");
        let str = "";
        for (let i=0; i<arr.length; i++) {
            let fLetter = arr[i].charAt(0).toUpperCase();
            let letters = arr[i].slice(1).toLowerCase();
            let fullLetters = fLetter + letters;
            str += fullLetters;
        }
        setPascalCase(str);
    }


    const toSnakeCase = () => {
        let arr = inputVal.split(" ");
        let str = "";
        for (let i = 0; i < arr.length; i++) {
            if (i > 0) {
                let letters = "-" + arr[i];
                str += letters;
            } else {
                str += arr[i];
            }
        }
        setSnakeCase(str);
    }

    const toKebabCase = () => {
        let arr = inputVal.split(" ");
        let str = "";
        for (let i = 0; i < arr.length; i++) {
            if (i > 0) {
                let letters = "_" + arr[i];
                str += letters;
            } else {
                str += arr[i];
            }
        }
        setKebabCase(str);
    }


    const toTrim = () => {
        let arr = inputVal.split(" ");
        let str = "";
        for (let i = 0; i < arr.length; i++) {
            str += arr[i];
        }
        setTrim(str);
    }

    const handleInputChange = (e) => {
        let val = e.target.value;
        setInputVal(val);
    }

    return (
        <div className='container'>
            <input type="text" id='input-box' value={inputVal} 
                onChange={handleInputChange}/>
            <div className="row">
                <label>Lower Case</label>
                <p>{lowerCase}</p>
            </div>
            <div className="row">
                <label>Upper Case</label>
                <p>{upperCase}</p>
            </div>
            <div className="row">
                <label>Camel Case</label>
                <p>{camelCase}</p>
            </div>
            <div className="row">
                <label>Pascal Case</label>
                <p>{pascalCase}</p>
            </div>
            <div className="row">
                <label>Snake Case</label>
                <p>{snakeCase}</p>
            </div>
            <div className="row">
                <label>Kebab Case</label>
                <p>{kebabCase}</p>
            </div>
            <div className="row">
                <label>Trim</label>
                <p>{trim}</p>
            </div>
        </div>
    )
}

export default StringTransformers
