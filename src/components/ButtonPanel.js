import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  return (
    <div className="button-groups">
      <div className="btn-group-a">
        <Button label="AC" clickHandler={clickHandler} />
        <Button label="+/-" clickHandler={clickHandler} />
        <Button label="%" clickHandler={clickHandler} />
        <Button label="÷" clickHandler={clickHandler} />
      </div>
      <div className="btn-group-a">
        <Button label="7" clickHandler={clickHandler} />
        <Button label="8" clickHandler={clickHandler} />
        <Button label="9" clickHandler={clickHandler} />
        <Button label="x" clickHandler={clickHandler} />
      </div>
      <div className="btn-group-a">
        <Button label="4" clickHandler={clickHandler} />
        <Button label="5" clickHandler={clickHandler} />
        <Button label="6" clickHandler={clickHandler} />
        <Button label="-" clickHandler={clickHandler} />
      </div>
      <div className="btn-group-a">
        <Button label="1" clickHandler={clickHandler} />
        <Button label="2" clickHandler={clickHandler} />
        <Button label="3" clickHandler={clickHandler} />
        <Button label="+" clickHandler={clickHandler} />
      </div>
      <div className="btn-group-b">
        <Button label="0" clickHandler={clickHandler} />
        <Button label="." clickHandler={clickHandler} />
        <Button label="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
