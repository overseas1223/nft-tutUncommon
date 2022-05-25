import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { abi } from "../../abi/abi";
import { contractAddress } from "../../config";
import MagicCat from "../../assets/magiccat.png";
import Background from "../../assets/background.jpg";
import { DeFiWeb3Connector } from 'deficonnect';


const { ethereum } = window;

const BigNumber = require('bignumber.js');
const Mint = () => {
    const mintprice = 1;
    const [mintedcount, setmintedcount] = useState(0)
    const [whitelisters, setlist] = useState([])// import { Web3ReactProvider } from '@web3-react/core'
    const [nftcount, setcount] = useState(0)
    const [account, setaccount] = useState()
    const [whitelisterstr, setwhitelisterstr] = useState()
    const [price, setprice] = useState(0)
    const [error, seterror] = useState('')

    useEffect(async () => {
            await connect();
            let provider = new ethers.providers.Web3Provider(ethereum);
            let signer = provider.getSigner();
            let nftContract = new ethers.Contract(contractAddress, abi, signer);
            let balance
            await nftContract.getid().then((result)=>{balance=BigNumber(result._hex).toString()})
            setmintedcount(parseInt(balance))

            await nftContract.getwhitelistersalestatu().then(async (result)=>{
                if(result){
                    let pp
                    setwhitelisterstr("whitelister sale period")
                    await nftContract.getWhitelisterPrice().then((result)=>{pp=BigNumber(result._hex).shiftedBy(-18).toString()})
                    setprice(parseInt(pp))
                }else{
                    let pp
                    await nftContract.getPrice().then((result)=>{pp=BigNumber(result._hex).shiftedBy(-18).toString()})
                    setprice(parseInt(pp))
                    console.log(pp)
                }
            })
           
    }, [])

    useEffect(() => {
        checkwhitelister()
    }, [account])


    async function checkwhitelister() {
        for (let i = 0; i < whitelisters.length; i++) {
            if (whitelisters[i].toLowerCase() === account) {
                // console.log(account)
                // console.log(whitelisters[i])
                setwhitelisterstr("YOU ARE WHITELISTER")
            }
        }
    }
    async function connect() {
        if (!ethereum) {
            // window.location.href = 'https://metamask.io/download.   '
        } else {
            if(window.ethereum.networkVersion!=97){
                await window.ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: '0x19' }], // chainId must be in hexadecimal numbers
                });
        
              }
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setaccount(accounts[0])
        }
    }
    const connectDefi = async () => {
        const connector = new DeFiWeb3Connector({
          supportedChainIds: [338],
          rpc: {338: 'https://cronos-testnet-3.crypto.org:8545/'}, //Cronos Testnet
          //rpcUrl: "https://evm-cronos.crypto.org/", // Cronos Mainnet
          pollingInterval: 15000,
        })
        console.log('asdf');
        await connector.activate();
      }
    async function mint() {
        let provider = new ethers.providers.Web3Provider(ethereum);
        let signer = provider.getSigner();
        let nftContract = new ethers.Contract(contractAddress, abi, signer);
        console.log(nftcount)
        await nftContract.mints(nftcount,{ value: ethers.utils.parseEther(`${price * nftcount}`) }).catch((err) => {
            seterror(err.data.message.split(':')[2])
            // seterror(err.error.message.split(':')[1].toUpperCase()); 
        })
        setmintedcount(mintedcount + nftcount)
    }
    return (
        <div id="mint">
                <div className="background">
                    <img src={Background} alt="Background" />
                </div>
            <div style={{ position: 'absolute', top: '30%' , width: '100%' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* <div> */}
                    {/* <div className="row">
                            <h1 className="ancient-style">THE ANCIENT</h1>
                            <h1>EGYPTIAN CAT</h1>
                        </div> */}
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className='connectbutton'>
                                <button className="glow-on-hover" style={{ color: '#FFD700' }} onClick={connect}>CONNECT METAMASK</button>
                            </div>
                            <br/>
                            <div className='connectbutton'>
                                <button className="glow-on-hover" style={{ color: '#FFD700' }} onClick={connectDefi}>CONNECT CryptoDefi</button>
                            </div>
                            <div>
                                <div className="mint_available text-center">{mintedcount}/5555 MINTED</div>
                                <div className="whitelister">{whitelisterstr}</div>
                                <div className="row">
                                    <div className="col">
                                        <button className="glow-on-hover smallbtn" onClick={() => { if (nftcount > 1) setcount(nftcount - 1); }}>-</button>
                                    </div>
                                    <div className="col count text-center">{nftcount}</div>
                                    <div className="col">
                                        <button className="glow-on-hover smallbtn" onClick={() => { setcount(nftcount + 1); }}>+</button>
                                    </div>
                                </div>

                                <button className="glow-on-hover mintbutton" onClick={mint}>mint</button>
                                <div className="mintprice text-center" style={{ backgroundColor: 'black'}}  >  MINT PRICE : {price} CRO</div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-6">
                            <img src={MagicCat} alt="Magic Cat" style={{ height: '80%' }} />
                        </div> */}
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
export default Mint;