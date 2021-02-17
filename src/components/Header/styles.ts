import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.header)`
  height: 200px;
  width: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;
