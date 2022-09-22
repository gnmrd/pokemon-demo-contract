const main = async() => {
    const gameContractFactory = await hre.ethers.getContractFactory('Pokemon');
    const gameContract = await gameContractFactory.deploy(
        ["Espeon", "Pikachu", "Sylveon"],
        ["https://d3fd5j8wprxn3h.cloudfront.net/wp-content/uploads/2022/05/Heres-How-Much-an-Espeon-License-Will-Cost-Pokemon-Unite.jpg",
        "https://www.denofgeek.com/wp-content/uploads/2021/04/Pikachu.png?resize=768%2C432",
        "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season19/season19_ep45_ss01.jpg"],
        [100,200,300], // HP values
        [100,75,50], // Attack damage values
        "Giovanni", // Boss Name
        "https://www.kindpng.com/picc/m/87-871714_giovanni-pokemon-hd-png-download.png",
        1000,
        30
    );

    await gameContract.deployed();
    console.log('Contract deployed to: ', gameContract.address);
    
};

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();