import React from 'react';
import './App.css';
import Card from './Card';

const App = () => {
  return (
    <div className="main">
      <Card
        cardName="FREE"
        price="$0"
        description={['Single User', '5GB Storage', "Unlimited Public Projects", "Community Access"]}
        liteColor={["Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]}
      />
      <Card
        cardName="PLUS"
        price="$9"
        description={[<b>5 Users </b>, '50GB Storage', "Unlimited Public Projects", "Community Access", "Dedicated Phone Support", "Free Subdomain"]}
        liteColor={["Monthly Status Reports"]}
      />
      <Card
        cardName="PRO"
        price="$49"
        description={[<b>Unlimited Users</b>, '150GB Storage', "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Unlimited Free Subdomain", "Monthly Status Reports"]}
      />
    </div>
  );
}

export default App;
