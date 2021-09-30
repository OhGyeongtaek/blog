import styled from "@emotion/styled";
import { Colors } from "../../consts/thema";

export const Item = styled.li`
  padding: 0 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${Colors.primary};
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  padding-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  padding: 4px 0;
  color: #666;
`;

export const DescriptionDate = styled.p`
  font-size: 0.85rem;
  padding: 4px 0;
  color: #666;
  text-align: right;
`;
