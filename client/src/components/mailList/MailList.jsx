import './mailList.css';

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">
            Save Time , save money !
        </h1>
        <span className="mailDesc">Abonnez-vous et profitez des best deals</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Email" />
            <button>S'abonner</button>
        </div>
    </div>
  )
}

export default MailList