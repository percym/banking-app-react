import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn={firstName:'Adrian',lastName:'Code',email:'contact@code.com'};
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
               <HeaderBox 
                  type="greeting"
                  title="welcome"
                  user={loggedIn?.firstName|| 'Guest'}
                  subtext="Track and manage your accounts efficiently."/>
               <TotalBalanceBox 
                  accounts={[]}
                  totalBanks={1}
                  totalCurrentBalance={1250.50}/>
            </header>
            RECENT TRANSACTIONS
        
        </div>
        <RightSideBar 
              user={loggedIn}
              transactions={[]}
              banks={[{currentBalance:123.50},{currentBalance:345.78}]}
            />
    </section>
  )
}

export default Home
