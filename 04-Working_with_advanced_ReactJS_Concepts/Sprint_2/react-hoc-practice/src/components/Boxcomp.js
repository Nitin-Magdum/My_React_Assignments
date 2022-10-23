import FormWrapper from "./FormWrapper";
import '../css/style.css'

function Boxcomp(props) {
    
    return(
        <div >
            <form onChange={props.superman.handleSubmit}>
                
                <label htmlFor="Box"> use this address for payment details</label>
                <input type="checkbox" id="Box" name="Box" onBlur={props.superman.handleBlur} onChange={props.superman.handleChange} value={props.superman.values.Box}/>
                {props.superman.errors.Box && props.superman.touched.Box ?<div style={{color:'red'}}>{props.superman.errors.Box}</div> : null}
                
                <button name='submit' type="submit">
                  Next
                </button>
               
            </form>
        </div>
    )
}
export default FormWrapper(Boxcomp,{
    initialValues:{
        Box:'',
        
    },
    onSubmit:(values)=>{
        console.log('Form data',values);
    },
    validate:(values)=>{
       
        let errors={};
        if (document.getElementById("Box").checked == false){
        errors.box = "Cannot be left empty";
        }

        return errors;
    }
}
);