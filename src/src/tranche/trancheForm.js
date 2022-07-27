import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import FormLabel from "../components/label";

function TrancheForm(props) {
  const { fields = [] } = props;

  const onDelete = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    props.onChangeField(newFields);
  }

  const handleChanage = (field, value, index) => {
    const newFields = [...fields];
    const fieldItem = {...newFields[index]};
    fieldItem[field] = value;
    newFields[index] = fieldItem;
    props.onChangeField(newFields);
  }

  return (
    <Form onSubmit={props.onSubmit}>
      {fields.map((field, index) => {
          const length = fields.length;
        const isLast = length === index + 1;
        return (
          <div className="bg-color-secondary">
            {index ? <Row className="pt-4 pe-4">
                <Col></Col>
                <Col className="width-unset flex-unset">
                <Button onClick={() => onDelete(index)} className="fs-8 px-4 py-1 bg-white" type="button" outline>
                    Delete {" "} <i class="fa-solid fa-trash-can"></i>
                </Button>
                </Col>
            </Row> : null}
            <Row className="p-4 pt-4">
              <Col md={6}>
                <Col md={10}>
                  <FormGroup>
                    <FormLabel isRequired for="trancheName">
                      Tranche Name
                    </FormLabel>
                    <Input
                      id="trancheName"
                      name="trancheName"
                      placeholder="Tranche Name"
                      type="text"
                      value={field.trancheName}
                      onChange={e => handleChanage('trancheName', e.target.value, index)}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={8}>
                  <FormGroup>
                    <FormLabel isRequired for="trancheAmount">
                      Tranche Amount
                    </FormLabel>
                    <span className="fs-9 fw-light">
                      {" "}
                      Please enter full value; Enter 1 Million as 1,000,00
                    </span>
                    <InputGroup>
                      <InputGroupText>SGD</InputGroupText>
                      <Input
                        id="trancheAmount"
                        name="trancheAmount"
                        placeholder="Tranche Amount"
                        type="number"
                        required
                        value={field.trancheAmount}
                        onChange={e => handleChanage('trancheAmount', e.target.value, index)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md={8}>
                  <FormGroup>
                    <FormLabel for="trancheAmountDrawn">
                      Tranche Amount Drawn
                    </FormLabel>
                    <InputGroup>
                      <InputGroupText>SGD</InputGroupText>
                      <Input
                        id="trancheAmountDrawn"
                        name="trancheAmountDrawn"
                        placeholder="Tranche Amount Drawn"
                        type="number"
                        value={field.trancheAmountDrawn}
                        onChange={e => handleChanage('trancheAmountDrawn', e.target.value, index)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md={8}>
                  <FormGroup>
                    <FormLabel for="trancheAmountUnDrawn">
                      Tranche Amount UnDrawn
                    </FormLabel>
                    <InputGroup>
                      <InputGroupText>SGD</InputGroupText>
                      <Input
                        id="trancheAmountUnDrawn"
                        name="trancheAmountUnDrawn"
                        placeholder="Tranche Amount UnDrawn"
                        type="number"
                        value={field.trancheAmountUnDrawn}
                        onChange={e => handleChanage('trancheAmountUnDrawn', e.target.value, index)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormLabel isRequired for="trancheAmountToSell">
                    Tranche Amount to Sell
                  </FormLabel>
                  <span className="fs-9 fw-light">
                    {" "}
                    Please enter full value; Enter 1 Million as 1,000,00
                  </span>
                  <FormGroup className="col-8">
                    <InputGroup className="col-8">
                      <InputGroupText>SGD</InputGroupText>
                      <Input
                        id="trancheAmountToSell"
                        name="trancheAmountToSell"
                        placeholder="Tranche Amount to Sell"
                        type="number"
                        required
                        value={field.trancheAmountToSell}
                        onChange={e => handleChanage('trancheAmountToSell', e.target.value, index)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <FormLabel isRequired for="interestRollOverDate">
                      Interest Rollover Date
                    </FormLabel>
                    <Row>
                      <Col md={5}>
                        <fieldset class="border p-2 rounded">
                          <legend class="float-none w-auto p-2 fs-6 mb-0 pb-1">
                            Date
                          </legend>
                          <Input
                            id="interestRollOverDate"
                            name="interestRollOverDate"
                            placeholder="date"
                            type="date"
                            required
                            value={field.interestRollOverDate}
                            onChange={e => handleChanage('interestRollOverDate', e.target.value, index)}
                          />
                        </fieldset>
                      </Col>
                      <Col md={6}>
                        <fieldset class="border p-2 rounded">
                          <legend class="float-none w-auto p-2 fs-6 mb-0 pb-1">
                            To be confirmed through Q&A
                          </legend>
                          <Input
                            id="exampleCheck"
                            name="check"
                            type="checkbox"
                            className="mt-2 mb-3"
                            required
                          />
                        </fieldset>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
              </Col>
              <Col md={6}>
                <Col md={8} className="mb-4">
                  <FormGroup>
                    <FormLabel isRequired for="facilityType">
                      Facility Type
                    </FormLabel>
                    <Input
                      id="facilityType"
                      name="facilityType"
                      placeholder="Facility Type"
                      type="text"
                      required
                      value={field.facilityType}
                      onChange={e => handleChanage('facilityType', e.target.value, index)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6} className="mb-4">
                  <FormGroup>
                    <FormLabel isRequired for="facilityType">
                      Maturity Date
                    </FormLabel>
                    <Input
                      id="maturityDate"
                      name="maturityDate"
                      placeholder="Maturity Date"
                      type="date"
                      required
                      value={field.maturityDate}
                      onChange={e => handleChanage('maturityDate', e.target.value, index)}
                    />
                  </FormGroup>
                </Col>
                <Col md={12} className="mb-4">
                  <FormGroup>
                    <FormLabel for="indicativeAverageLife1">
                      Indicative Average Life (Years)
                    </FormLabel>
                    <Row className="align-items-center">
                      <Col md={2} className="pe-1">
                        <Input 
                            id="indicativeAverageLife1" 
                            name="indicativeAverageLife1" 
                            placeholder="" 
                            type="text"
                            value={field.indicativeAverageLife1}
                            onChange={e => handleChanage('indicativeAverageLife1', e.target.value, index)}
                        />
                      </Col>
                      <Col className="flex-unset width-unset d-flex align-items-end px-0">
                        {" "}
                        &#x2022;
                      </Col>
                      <Col md={2} className="ps-1 pr-0">
                        <Input 
                            id="indicativeAverageLife2" 
                            name="indicativeAverageLife2" 
                            placeholder="" 
                            type="text"
                            value={field.indicativeAverageLife2}
                            onChange={e => handleChanage('indicativeAverageLife2', e.target.value, index)}
                        />
                      </Col>
                      <Col>
                        <Row>
                          <span className="fs-9 fw-light ps-0">
                            This information is indicative
                          </span>
                        </Row>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
                <Col md={10} className="mb-4">
                  <FormGroup>
                    <FormLabel isRequired for="marginType">
                      Margin
                    </FormLabel>
                    <FormLabel for="marginType" className="ms-1">
                      (% p.a.)
                    </FormLabel>
                    <Row>
                      <Col md={6} className="pe-0">
                        <Input
                          required
                          id="marginType"
                          name="marginType"
                          type="select"
                          value={field.marginType}
                          onChange={e => handleChanage('marginType', e.target.value, index)}
                        >
                          <option value="">Select</option>
                          <option>SIBOR</option>
                        </Input>
                      </Col>
                      <Col md={4}>
                        <Input
                          required
                          id="marginValue"
                          name="marginValue"
                          placeholder=""
                          type="number"
                          value={field.marginValue}
                          onChange={e => handleChanage('marginValue', e.target.value, index)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
                <Col md={4} className="mb-4">
                  <FormGroup>
                    <FormLabel for="commitmentFee">
                      Commitment Fee (% p.a.)
                    </FormLabel>
                    <Input
                      id="commitmentFee"
                      name="commitmentFee"
                      placeholder="Commitment Fee"
                      type="number"
                      value={field.commitmentFee}
                      onChange={e => handleChanage('commitmentFee', e.target.value, index)}
                    />
                  </FormGroup>
                </Col>
                <Col md={8}>
                  <FormGroup>
                    <FormLabel for="trancheAmount">
                      Accrued Interest <i class="fa-solid fa-circle-info text-green cursor-pointer"></i>
                    </FormLabel>
                    <InputGroup>
                      <InputGroupText>SGD</InputGroupText>
                      <Input
                        id="accruedInterest"
                        name="accruedInterest"
                        placeholder="Accrued Interest"
                        type="number"
                        value={field.accruedInterest}
                        onChange={e => handleChanage('accruedInterest', e.target.value, index)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Col>
            </Row>
            {!isLast && length > 1 ? (
              <div className="divider-white" />
            ) : null}
          </div>
        );
      })}
      <Row className="justify-content-between p-4 pt-0 bg-color-secondary">
        <div className="divider mb-4" />
        <Col className="flex-unset width-unset">
          <Button
            onClick={props.onTranche}
            type="button"
            color="info"
            className="text-white"
          >
            + Tranche
          </Button>
          <div className="mt-4">
            <span className="text-danger">*</span> - Mandatory
          </div>
        </Col>
        <Col className="flex-unset width-unset d-flex align-items-end">
          <Button
            type="submit"
            className="px-5 bg-color-light text-black border-0"
          >
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default TrancheForm;
