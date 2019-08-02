import React, {useState} from 'react';

const Form = ({dataQuery}) => {

    //component's state
    //search = state, saveState = this.setState({})
    const [search, setSearch] = useState({
        city : '',
        country : ''
    })

    const handleChange = e => {
        //change state
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        //get wheather
        e.preventDefault();

        //send query data to main component
        dataQuery(search);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleChange}    
                />
                <label htmlFor="city"> City: </label>
            </div>

            <div className="input-field col s12">
                <select name="country" onChange={handleChange} >
                    <option value="">--Select a country--</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="ES">Spain</option>
                    <option value="JP">Japan</option>
                    <option value="NO">Norway</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large 
                    btn-block yellow accent-4" value="Search Wheather" />
            </div>
        </form>
    );
}
 
export default Form;