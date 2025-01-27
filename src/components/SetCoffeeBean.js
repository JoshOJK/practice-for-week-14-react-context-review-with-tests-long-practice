import { useCoffee } from '../context/CoffeeContext.js'

const SetCoffeeBean = ({ coffeeBeans }) => {

 const { coffeeBean, setCoffeeBeanId } = useCoffee()

 const onChange = (event) =>  {
  const selectedCoffeeBeanId = event.target.value;
  setCoffeeBeanId(selectedCoffeeBeanId);
 }

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        value={coffeeBean.id}
        onChange={onChange}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;
