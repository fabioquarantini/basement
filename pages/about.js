import Head from 'next/head'
// import Nav from '../components/Nav'

import styled from 'styled-components'
const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`
export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      {/* <Nav /> */}
      <Title>About</Title>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum rutrum felis, eu suscipit orci eleifend vitae. Fusce tristique nulla ipsum, a semper felis volutpat ac. Vivamus nec magna dapibus, feugiat dolor quis, commodo libero. In et lorem ultrices, porta velit quis, rhoncus nisl. Etiam varius ultrices tellus eu consectetur. Phasellus faucibus leo et ligula fermentum ultrices. Nam varius pulvinar ipsum, ut tristique tortor tristique eget. Nulla a diam facilisis felis imperdiet mollis. Quisque non quam eget diam auctor lacinia sit amet nec sem. Cras turpis ex, elementum eget vulputate tempor, scelerisque sit amet dolor. Cras ut tempus ex, convallis commodo nulla. Proin eu condimentum ligula.</p>
      <p>Pellentesque faucibus dolor orci, vitae ullamcorper ipsum venenatis a. Etiam feugiat urna eu tellus maximus, sit amet ultricies odio pharetra. Cras maximus libero orci. Suspendisse ac feugiat turpis. Nunc egestas mollis urna at malesuada. Integer eu sapien consectetur, rhoncus ex a, tristique lectus. In augue elit, hendrerit ut augue eget, euismod feugiat urna. Phasellus tempor arcu ut sem pretium luctus. Nam rhoncus a purus ac feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
    </div>
  )
}
