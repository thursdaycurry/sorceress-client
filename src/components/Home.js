const Home = () => {
  return (
    <div className='mx-5 my-5'>
      <h1 className='text-xl'>Sorceress</h1>
      <p>
        세계에 대한 정보를 수집하고 분석하여 투자 활동에 도움을 주는
        서비스입니다.
      </p>

      <ol className='my-10'>
        <li>
          -{' '}
          <a className='text-teal-600' href='country/list'>
            Country/list
          </a>
          : 세계 국가 리스트와 코드 확인
        </li>
        <li>
          -{' '}
          <a className='text-teal-600' href='country/energy'>
            Country/energy
          </a>
          : 국가들의 전력 생산을 위한 에너지 사용 포트폴리오를 비교
        </li>
      </ol>

      {console.log(process.env.REACT_APP_API_URL.substr(0, 12))}
    </div>
  );
};
export default Home;
