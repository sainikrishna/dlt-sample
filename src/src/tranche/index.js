import { useState } from "react";
import SubmitModal from "./submitModal";
import TrancheForm from "./trancheForm";

const initialFields = {
  trancheName: '',
  trancheAmount: '',
  trancheAmountDrawn: '',
  trancheAmountUnDrawn: '',
  trancheAmountToSell: '',
  interestRollOverDate: '',
  facilityType: '',
  maturityDate: '',
  indicativeAverageLife1: '',
  indicativeAverageLife2: '',
  marginType: '',
  marginValue: '',
  commitmentFee: '',
  accruedInterest: '',
};

function Tranche() {
  const [fields, setFields] = useState([initialFields]);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const onTranche = () => {
    const newFields = [...fields];
    newFields.push(initialFields);
    setFields(newFields);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSubmitModal(true);
  }

  const resetData = () => {
    setFields([initialFields]);
  }
  
  return (
    <div className="">
      <div className="top-border" />
      <div className="mx-0">
        <div className="bg-color-secondary">
            <h5 className="text-green fw-bold p-4 pb-0">TRANCHE INFO</h5>
            <div className="bg-color-primary p-2 px-3 rounded fs-7 fw-light w-100 mx-4">
            <i class="fa-solid fa-circle-info"></i>
            {" "}For eatch tranche of your facility, please enter details below, then
            press 'Save/Next' button.
            </div>
        </div>
        <TrancheForm onTranche={onTranche} onChangeField={setFields} fields={fields} onSubmit={handleSubmit} />
      </div>
      <SubmitModal onClose={resetData} fields={fields} modal={showSubmitModal} setModal={setShowSubmitModal} />
    </div>
  );
}

export default Tranche;
