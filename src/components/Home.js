import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase'
import ServerIcon from './ServerIcon';

function Home() {
    const [user] = useAuthState(auth);

  return (
    <>
        {!user && <Navigate to="/" />}
        <div className="flex h-screen">
            <div className="flex flex-col space-y-3 bg-discord_serversBg p-3 min-w-max">
                <div className="server-default hover:bg-discord_purple">
                    <img src="https://rb.gy/kuaslg" alt="" className="h-5"/>
                </div>
                <hr className="border-gray-700 border w-8 mx-auto"/>
                <ServerIcon image="https://rb.gy/qidcpp" />
                <ServerIcon image="https://rb.gy/zxo0lz" />
                <ServerIcon image="https://rb.gy/qidcpp" />
                <ServerIcon image="https://rb.gy/zxo0lz" />
            </div>
        </div>
    </>
  )
}

export default Home