import { Label, Row } from "reactstrap";

function FormLabel(props) {
  return (
    <>
      <Label {...props} />
      {props.isRequired ? <span className="text-danger">*</span> : null}
    </>
  );
}

export default FormLabel;
