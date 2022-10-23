import FormWrapper from "./FormWrapper";


function FormsDemo2(props) {
    
    return(
        <div>
        <form onSubmit={props.superman.handleSubmit}>
            <label htmlFor="lname">Last name</label>
            <input type='text' id="lname" name="lname" onBlur={props.superman.handleBlur} onChange={props.superman.handleChange} value={props.superman.values.lname}/>
            {props.superman.errors.lname && props.superman.touched.lname ?<div style={{color:'red'}}>{props.superman.errors.lname}</div> : null}
            <br />
            
        </form>
    </div>
    )
}
export default FormWrapper(FormsDemo2,{
    initialValues:{
        
        lname:''
    },
    onSubmit:(values)=>{
        console.log('Form data',values);
    },
    validate:(values)=>{
       
        let errors={};
        
        if(values.lname==''){
        errors.lname="Lname is Required" ;}
        else if (values.lname.length < 8){
            errors.lname = "Minimum length is 8 characters";}
             
              
        return errors;
    }
}
);