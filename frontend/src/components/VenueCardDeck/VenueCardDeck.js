import React from 'react';
import { useQuery } from '@apollo/client';
import { allVenues } from '../../client/api/queries/venues';
import { Container, Col, Row } from 'react-bootstrap';
import VenueCard from './components/VenueCard/VenueCard';
import FilterForm from './components/FilterForm/FilterForm';

function VenueCardDeck() {
  const { loading, error, data } = useQuery(allVenues);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const venuesList = data.venues.map(venue => {
    return (
      <Row key={venue.id} xs={1}>
        <VenueCard
          id={venue.id}
          name={venue.name}
          logo={venue.logo._id}
          maxCapacity={venue.maxCapacity}
          street={venue.address.street}
        />
      </Row>
    );
  })

  return (
    <Container>
      <Col>
        <Row xs={1}>
          <FilterForm />
        </Row>
        {venuesList}
      </Col>
    </Container>
  )
}

export default VenueCardDeck;