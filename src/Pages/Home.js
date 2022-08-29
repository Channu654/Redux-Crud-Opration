import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { deletname, getdata } from '../Redux/Action';
import { Link, useNavigate } from 'react-router-dom';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
const Home = () => {
  const state = useSelector((state) => state.reducer);
  console.log('state:', state);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdata());
  }, []);

  const handledelete = (id) => {
    if (window.confirm('are sure you wantted to delete user ?')) {
      dispatch(deletname(id));
    }
  };
  return (
    <div>
      <div>
        <RouterLink to='/Adduser'>
          <div>
            <Button bg={'teal'}>Adduser</Button>
          </div>
        </RouterLink>
        <br /> <br />
        <TableContainer>
          <Table variant='simple'>
            <Tr bg={'black'}>
              <Th textColor={'white'}>Id</Th>
              <Th textColor={'white'}>Name</Th>
              <Th textColor={'white'}>Address</Th>
              <Th textColor={'white'}>Contact</Th>
              <Th textColor={'white'} mr={'100px'}>
                Actions
              </Th>
            </Tr>
            <Tbody>
              {state.data?.map((el) => {
                return (
                  <Tr>
                    <Td>{el.id}</Td>
                    <Td>{el.username}</Td>
                    <Td>{el.Address}</Td>
                    <Td>{el.contact}</Td>
                    <Button onClick={() => handledelete(el.id)}>Delete</Button>

                    <Button onClick={() => navigate(`/Edit/${el.id}`)}>
                      Edit
                    </Button>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Home;
