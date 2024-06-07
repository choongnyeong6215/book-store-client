import styled from "styled-components";

const Home = () => {
  return <HomeStyle>Home</HomeStyle>;
};

const HomeStyle = styled.div`
  color: ${({ theme }) => theme.$1};
`;

export default Home;

import { useState } from "react";

const ${TM_FILENAME_BASE} = () => {
  const [$2, $3] = useState<$4>($5)
  return(
      <>
        $6
      </>
  );
}

export default ${TM_FILENAME_BASE};
