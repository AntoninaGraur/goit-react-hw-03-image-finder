import { Hearts } from 'react-loader-spinner';

import {LoaderStyled} from './Loader.styled'

const Loader = () => (
  <LoaderStyled>
    <Hearts color="#ff4800" height={320} width={320} />
  </LoaderStyled>
);

export default Loader;
