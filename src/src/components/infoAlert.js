function InfoAlert(props) {
  return (
    <div className="bg-color-primary p-2 px-3 rounded fs-7 fw-light w-100">
      <i class="fa-solid fa-circle-info"></i> {props.text}
    </div>
  );
}

export default InfoAlert;
