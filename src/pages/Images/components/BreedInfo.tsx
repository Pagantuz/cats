import { Descriptions, Rate } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import React from 'react';
import { Breed } from '../../../types';
import { yesNo } from '../../../utils/yesNoFromNumber';

type BreedInfoType = {
  breed: Breed;
};

const BreedInfo: React.FC<BreedInfoType> = ({ breed }) => {
  return (
    <Descriptions title={breed.name} bordered layout='vertical'>
      <Descriptions.Item label='Temperament'>
        {breed.temperament}
      </Descriptions.Item>
      <Descriptions.Item label='Origin'>{breed.origin}</Descriptions.Item>
      <Descriptions.Item label='Description'>
        {breed.description}
      </Descriptions.Item>
      <Descriptions.Item label='Life Span'>{breed.life_span}</Descriptions.Item>
      <Descriptions.Item label='Experimental'>
        {yesNo(breed.experimental)}
      </Descriptions.Item>
      <Descriptions.Item label='Hairless'>
        {yesNo(breed.hairless)}
      </Descriptions.Item>
      <Descriptions.Item label='Natural'>
        {yesNo(breed.natural)}
      </Descriptions.Item>
      <Descriptions.Item label='Rare'>{yesNo(breed.rare)}</Descriptions.Item>
      <Descriptions.Item label='Rex'>{yesNo(breed.rex)}</Descriptions.Item>
      <Descriptions.Item label='Suppress Tail'>
        {yesNo(breed.suppressed_tail)}
      </Descriptions.Item>
      <Descriptions.Item label='Short Legs'>
        {yesNo(breed.short_legs)}
      </Descriptions.Item>
      <Descriptions.Item label='Hypoallergenic'>
        {yesNo(breed.hypoallergenic)}
      </Descriptions.Item>
      <Descriptions.Item label='Adaptability'>
        <Rate
          character={<HeartOutlined color='red' />}
          allowHalf
          disabled
          defaultValue={breed.adaptability}
        />
      </Descriptions.Item>
      <Descriptions.Item label='Affection Level'>
        <Rate
          character={<HeartOutlined color='red' />}
          allowHalf
          disabled
          defaultValue={breed.affection_level}
        />
      </Descriptions.Item>
      <Descriptions.Item label='Child Friendly'>
        <Rate
          character={<HeartOutlined color='red' />}
          allowHalf
          disabled
          defaultValue={breed.child_friendly}
        />
      </Descriptions.Item>
      <Descriptions.Item label='Dog Friendly'>
        <Rate
          character={<HeartOutlined color='red' />}
          allowHalf
          disabled
          defaultValue={breed.dog_friendly}
        />
      </Descriptions.Item>
      <Descriptions.Item label='Energy Level'>
        <Rate
          character={<HeartOutlined color='red' />}
          allowHalf
          disabled
          defaultValue={breed.energy_level}
        />
      </Descriptions.Item>
      <Descriptions.Item label='Grooming'>
        <Rate
          character={<HeartOutlined color='red' />}
          allowHalf
          disabled
          defaultValue={breed.grooming}
        />
      </Descriptions.Item>
      <Descriptions.Item label='Health Issues'>
        <Rate
          character={<HeartOutlined color='red' />}
          allowHalf
          disabled
          defaultValue={breed.health_issues}
        />
      </Descriptions.Item>
      <Descriptions.Item label='Intelligence'>
        <Rate
          character={<HeartOutlined color='red' />}
          allowHalf
          disabled
          defaultValue={breed.intelligence}
        />
      </Descriptions.Item>
      <Descriptions.Item label='Shedding Level'>
        <Rate
          character={<HeartOutlined color='red' />}
          allowHalf
          disabled
          defaultValue={breed.shedding_level}
        />
      </Descriptions.Item>
      <Descriptions.Item label='Social Needs'>
        <Rate
          character={<HeartOutlined color='red' />}
          allowHalf
          disabled
          defaultValue={breed.social_needs}
        />
      </Descriptions.Item>
      <Descriptions.Item label='Stranger Friendly'>
        <Rate
          character={<HeartOutlined color='red' />}
          allowHalf
          disabled
          defaultValue={breed.stranger_friendly}
        />
      </Descriptions.Item>
      <Descriptions.Item label='Vocalistaion'>
        <Rate
          character={<HeartOutlined color='red' />}
          allowHalf
          disabled
          defaultValue={breed.vocalisation}
        />
      </Descriptions.Item>
    </Descriptions>
  );
};

export { BreedInfo };
