let contery = "iran";
const getcontery = async function name(countryName) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await response.json();

    console.log(data.name);
  } catch (err) {
    console.log(`error message is :====>   ${err.message}`);
  }
};

getcontery(contery);
