import "../assets/admin.css"
import { abi } from '../abi/abi_admin';
// import { Web3ReactProvider , useWeb3React} from '@web3-react/core'
// import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { ethers } from "ethers"; // npm install ethers
import { useState } from 'react';
const { ethereum } = window;
const contractaddress = "0x288e81A8BFe19Faa58F72d08FDa3D24D963A38b3"

function Admin() {
    const [whitelisters, setwhitelisters] = useState()
    const [price, setprice] = useState()
    const [whitelisterprice, setwhitelisterprice] = useState()
    // const { active, activate, deactivate, chainId, account, } =  useWeb3React();
    const connect = async () => {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    }

    const withdraw = async () => {
        const provider1 = new ethers.providers.Web3Provider(ethereum);
        const signer1 = provider1.getSigner();
        const Contract = new ethers.Contract(contractaddress, abi, signer1);
        await Contract.withdrawAll()
    }

    const addwhitelister = async () => {
        const provider1 = new ethers.providers.Web3Provider(ethereum);
        const signer1 = provider1.getSigner();
        const Contract = new ethers.Contract(contractaddress, abi, signer1);
        await Contract.addWhitelister(whitelisters.split(','))
    }
    const setPrice = async () => {
        const provider1 = new ethers.providers.Web3Provider(ethereum);
        const signer1 = provider1.getSigner();
        const Contract = new ethers.Contract(contractaddress, abi, signer1);
        await Contract.setPrice(price)
    }
    const setwhitePrice = async () => {
        const provider1 = new ethers.providers.Web3Provider(ethereum);
        const signer1 = provider1.getSigner();
        const Contract = new ethers.Contract(contractaddress, abi, signer1);
        await Contract.setWhitelisterprice(whitelisterprice)
    }
    const freemint = async () => {
        const provider1 = new ethers.providers.Web3Provider(ethereum);
        const signer1 = provider1.getSigner();
        const Contract = new ethers.Contract(contractaddress, abi, signer1);
        await Contract.freemint("7")
    }
    const changesalestatu = async () => {
        const provider1 = new ethers.providers.Web3Provider(ethereum);
        const signer1 = provider1.getSigner();
        const Contract = new ethers.Contract(contractaddress, abi, signer1);
        await Contract.startPublicsale()
    }
    const changewhitestatu = async () => {
        const provider1 = new ethers.providers.Web3Provider(ethereum);
        const signer1 = provider1.getSigner();
        const Contract = new ethers.Contract(contractaddress, abi, signer1);
        await Contract.startWhitelistersale()
    }


    return (
        <div className="App">
            <header className="App-header">
                <label className='fontSize' >Admin Panel</label>
                <div className="row">

                    <button className="buttonStyle" onClick={connect}>Connect wallet</button>
                    <br></br>
                    <button className="buttonStyle" onClick={withdraw}>WithDraw</button>
                </div>
                <label>Add whitelisters with comma</label>
                <textarea className='whitelister' type="text" value={whitelisters} onChange={(e) => { setwhitelisters(e.target.value) }}></textarea>
                <button className="buttonStyle" onClick={addwhitelister}>Add whitelister</button>
                <label>Input price(cro)</label>
                <input value={price} onChange={e => setprice(e.target.value)}></input>
                <button className="buttonStyle" onClick={setPrice}>SET Price</button>
                <label>Input whitelister price(cro)</label>
                <input value={whitelisterprice} onChange={e => setwhitelisterprice(e.target.value)}></input>
                <button className="buttonStyle" onClick={setwhitePrice}>Set whitelister price</button>
                <button className="buttonStyle" onClick={freemint}>Freemint</button>

                <button className="buttonStyle" onClick={changesalestatu}>Change public sale statu</button>
                <button className="buttonStyle" onClick={changewhitestatu}>Change whitelister sale statu</button>

            </header>
        </div>
    );
}

export default Admin;
