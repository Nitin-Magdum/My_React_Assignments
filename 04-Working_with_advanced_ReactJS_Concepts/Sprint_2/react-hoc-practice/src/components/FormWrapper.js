import {useFormik} from 'formik';
function FormWrapper(FormComp,obj) {
   
    function InnerComp() {
        
        const formik = useFormik(obj);
        console.log(formik.values);
        console.log("Touched fields: ",formik.touched);
        return(<FormComp  superman={formik} />);
    }
    return InnerComp;
}
export default FormWrapper;