import React from "react";
import Image from "next/image";

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div key={"dummy-content" + index} className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes
              to text? No problem. Langotiya jeetu ka mara hua yaar is ready to capture every thought.
            </p>
            <Image
              src=""
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        )
      })}
    </>
  )
}

export const carouselData = [
  {
    category: "One",
    title: "What Are Tokens?",
    src: "/slide.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 py-4">
        
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          →
          </span>{" "}
          Tokens are digital assets built on a blockchain. They can represent money, voting power, game assets, or ownership. 
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Two main types: 
          </span>{" "}
          
        </p>
        <br></br>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Fungible Tokens (ERC20) →
          </span>{" "}
          Like cash (1 USDT = 1 USDT)
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Non-Fungible Tokens (ERC721, ERC1155) →
          </span>{" "}
          Unique assets (NFTs)
        </p>
      </div>
    ),
  },
  {
    category: "Two",
    title: "Why Token Standards Matter",
    src: "/two.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            
          </span>{" "}
          Without standards, every token would work differently. ERC standards ensure compatibility across wallets, exchanges, and smart contracts. Think of them like USB chargers—a universal way to connect devices!
        </p>
        
      </div>
    ),
  },
  {
    category: "Three",
    title: "The Most Popular Token Standard",
    src: "/three.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ERC20
          </span>{" "}
          is the standard for fungible tokens on Ethereum.
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Stablecoins
          </span>{" "}
          (USDT, DAI)
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          DeFi tokens
          </span>{" "}
          (UNI, LINK)
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Gaming tokens
          </span>{" "}
          (AXS, SAND)
        </p>
        
      </div>
    ),
  },
  {
    category: "Four",
    title: "How ERC20 Works",
    src: "/four.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Think of ERC20 as a vending machine:
          </span>{" "}
          You insert money (crypto). Select a product (transfer tokens). The machine follows set rules (smart contract functions).
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Key Functions:
          </span>{" "}
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          totalSupply() → 
          </span>{" "}
            Total number of tokens.
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          balanceOf(address) →
          </span>{" "}
          Check token balance
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          transfer(to, amount) →
          </span>{" "}
          Allow spending
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          transferFrom(from, to, amount) →
          </span>{" "}
          Move tokens on behalf of a user
        </p>
    
      </div>
    ),
  },
  {
    category: "Five",
    title: "Other Token Standards (Beyond ERC20: Specialized Tokens)",
    src: "/five.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ERC223: Prevents lost tokens →
          </span>{" "}
          
          Safer transactions
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          EIP-1363: Auto-payment approval →
          </span>{" "}
          
          Token-based payments
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ERC721: NFTs (Unique assets) →
          </span>{" "}
          
          Digital art, gaming
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          EIP-2309: Mass NFT minting →
          </span>{" "}
          
          Efficient bulk NFT creation
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          EIP-4400: Soulbound tokens →
          </span>{" "}
          
          Proof of identity, certificates
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          EIP-4907: Rental NFTs →
          </span>{" "}
          
          Renting virtual land/items
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ERC777: Improved ERC20 →
          </span>{" "}
          
          More flexible token transfers
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ERC1155: Multi-token standard →
          </span>{" "}
          
          Gaming assets (fungible + NFTs)
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          ERC4626: Tokenized vaults (DeFi) →
          </span>{" "}
          
          Interest-bearing DeFi assets
        </p>
        
      </div>
    ),
  },
  {
    category: "Six",
    title: "Why This Matters",
    src: "/six.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Token standards power Web3 innovation:
          </span>{" "}
         
          
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
         
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          DeFi →
          </span>{" "}
          Loans, staking, payments
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
         
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Gaming →
          </span>{" "}
          Play-to-earn, in-game assets
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
         
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          NFTs →
          </span>{" "}
          Digital collectibles & ownership
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
         
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Identity →
          </span>{" "}
          Certificates, memberships, verifiable credentials
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
         
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          
          </span>{" "}
          Understanding these standards helps developers, businesses, and investors use blockchain technology effectively.
        </p>
        <br/>
        
      </div>
    ),
  },
  {
    category: "Seven",
    title: "Closing Thoughts",
    src: "/seven.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
        
          </span>{" "}
         
          ERC20 is the backbone of crypto tokens. Other standards like ERC721, ERC1155, and ERC777 expand its use cases. Token standards create a universal, interoperable blockchain ecosystem.
        </p>
        <br/>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
         
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Final Thought →
          </span>{" "}
          Imagine a world where your game assets, loyalty points, and investments all exist on blockchain—this is the power of tokenization!
        </p>
        
        
      </div>
    ),
  },
];