import FormWrapper from "./FormWrapper";


function State(props) {
    
    return(
        <div>
            <form onSubmit={props.superman.handleSubmit}>
                <label htmlFor="state">state</label>
                <input type='text' id="state" name="state" onBlur={props.superman.handleBlur} onChange={props.superman.handleChange} value={props.superman.values.state}/>
                {props.superman.errors.state && props.superman.touched.state ?<div style={{color:'red'}}>{props.superman.errors.state}</div> : null}
                <br />

                <br />
               
            </form>
        </div>
    )
}
export default FormWrapper(State,{
    initialValues:{
        state:'',
        
    },
    onSubmit:(values)=>{
        console.log('Form data',values);
    },
    validate:(values)=>{
       
        let errors={};
        
        
        return errors;
    }
}
);