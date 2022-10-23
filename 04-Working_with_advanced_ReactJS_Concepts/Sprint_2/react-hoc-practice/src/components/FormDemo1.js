import FormWrapper from "./FormWrapper";


function FormsDemo1(props) {
    
    return(
        <div id='q'>
            <form onSubmit={props.superman.handleSubmit}>
                <label htmlFor="address1">address1</label>
                <input type='text' id="address1" name="address1" onBlur={props.superman.handleBlur} onChange={props.superman.handleChange} value={props.superman.values.address1}/>
                {props.superman.errors.address1 && props.superman.touched.address1 ?<div style={{color:'red'}}>{props.superman.errors.address1}</div> : null}
                <br />
                <label htmlFor="address2">address2</label>
                <input type='text' id="address2" name="address2" onBlur={props.superman.handleBlur} onChange={props.superman.handleChange} value={props.superman.values.address2}/>
                {props.superman.errors.address2 && props.superman.touched.address2 ?<div style={{color:'red'}}>{props.superman.errors.address2}</div> : null}

                <br />
               
            </form>
        </div>
    )
}
export default FormWrapper(FormsDemo1,{
    initialValues:{
        address1:'',
        address2:''
    },
    onSubmit:(values)=>{
        console.log('Form data',values);
    },
    validate:(values)=>{
       
        let errors={};
        if(values.address1==''){
         errors.address1="Required";}
        else if (values.address1.length < 32){
         errors.address1 = "Minimum length is 32 characters";}
        if(values.address2==''){
        errors.address2="Required" ;}
        else if (values.address2.length < 32){
            errors.address2 = "Minimum length is 32 characters";}
             
              
        return errors;
    }
}
);