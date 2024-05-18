import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn={firstName:'Adrian'};
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
    </section>
  )
}

export default Home
