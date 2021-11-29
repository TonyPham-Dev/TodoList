
import './index.css';
export default function Time ({ day, seconds }) {
    seconds =new Date().toLocaleTimeString()
    const year = new Date().toLocaleDateString()
     switch (new Date().getDay()) {
      case 0:
         day = "Sunday";
        break;
      case 1:
         day = "Monday";
        break;
      case 2:
         day = "Tuesday";
        break;
      case 3:
         day = "Wednesday";
        break;
      case 4:
         day = "Thursday";
        break;
      case 5:
         day = "Friday";
        break;
      case 6:
         day = "Saturday";
        break;
    }
     return (
         <div className="text-center">
            <h2>{day}</h2>
            <span>
                <h3 className="p-3">{seconds}</h3>
                <h3>{year}</h3>
            </span>
         </div>
     )
}