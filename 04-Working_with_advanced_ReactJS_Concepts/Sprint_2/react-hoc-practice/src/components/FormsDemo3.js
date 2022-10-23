import FormWrapper from "./FormWrapper";


function FormsDemo3(props) {
    
    return(
        <div>
            <form onSubmit={props.superman.handleSubmit}>
                <label htmlFor="fname">First name</label>
                <input type='text' id="fname" name="fname" onBlur={props.superman.handleBlur} onChange={props.superman.handleChange} value={props.superman.values.fname}/>
                {props.superman.errors.fname && props.superman.touched.fname ?<div style={{color:'red'}}>{props.superman.errors.fname}</div> : null}
                <br />
                
            </form>
        </div>
    )
}
export default FormWrapper(FormsDemo3,{
    initialValues:{
        fname:'',
       
    },
    onSubmit:(values)=>{
        console.log('Form data',values);
    },
    validate:(values)=>{
       
        let errors={};
        if(values.fname==''){
            errors.fname="Fname is Required";}
           else if (values.fname.length < 8){
            errors.fname = "Minimum length is 8 characters";}
       
        
        return errors;
    }
}
);