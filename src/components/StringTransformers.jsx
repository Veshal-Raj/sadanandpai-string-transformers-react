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

    const toLowercase = (inputVal) => {
        setLowerCase(inputVal.toLowerCase());
    }

    const toUppercase = (inputVal) => {
        setUpperCase(inputVal.toUpperCase());
    }

    const toCamelCase = () => {
        const words = inputVal.split(" ")
        const camelCaseString = inputVal.split(" ").reduce((acc, word, index) => {
            return index < words.length - 1 ?  acc + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " " : acc + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
        }, "")
        setCamelCase(camelCaseString)
    }

    const toPascalCase = () => {
        const pascalStr = inputVal.split(" ").reduce((acc, curr) =>  {
            return acc + curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase()
        }, "")
        setPascalCase(pascalStr);
    }


    const toSnakeCase = () => {
        let str = inputVal.split(" ").reduce((acc, curr, index) => {
            return index > 0 ? acc + "-" + curr : acc + curr;  
        })
        setSnakeCase(str);
    }

    const toKebabCase = () => {
        const str = inputVal.split(" ").reduce((acc, curr, index) => {
            return index > 0 ? acc + "_" + curr : acc + curr;
        })
        setKebabCase(str);
    }


    const toTrim = () => {
        const str = inputVal.split(" ").reduce((acc, curr) => acc + curr);
        setTrim(str);
    }

    useEffect(()=> {
        toLowercase(inputVal);
        toUppercase(inputVal);
        toCamelCase();
        toPascalCase();
        toSnakeCase();
        toKebabCase();
        toTrim();
    }, [inputVal])


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
