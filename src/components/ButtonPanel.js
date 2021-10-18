import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ handleClick }) => (

  <div className="button-groups">
    <div className="btn-group-a">
      <Button label="AC" handleClick={handleClick} />
      <Button label="+/-" handleClick={handleClick} />
      <Button label="%" handleClick={handleClick} />
      <Button label="÷" handleClick={handleClick} />
    </div>
    <div className="btn-group-a">
      <Button label="7" handleClick={handleClick} />
      <Button label="8" handleClick={handleClick} />
      <Button label="9" handleClick={handleClick} />
      <Button label="x" handleClick={handleClick} />
    </div>
    <div className="btn-group-a">
      <Button label="4" handleClick={handleClick} />
      <Button label="5" handleClick={handleClick} />
      <Button label="6" handleClick={handleClick} />
      <Button label="-" handleClick={handleClick} />
    </div>
    <div className="btn-group-a">
      <Button label="1" handleClick={handleClick} />
      <Button label="2" handleClick={handleClick} />
      <Button label="3" handleClick={handleClick} />
      <Button label="+" handleClick={handleClick} />
    </div>
    <div className="btn-group-b">
      <Button label="0" handleClick={handleClick} />
      <Button label="." handleClick={handleClick} />
      <Button label="=" handleClick={handleClick} />
    </div>
  </div>
);

export default ButtonPanel;
