import React, {useCallback, useState, useEffect} from 'react';
import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Input, Product, Text} from '../components/';
import ActiveOpportunities from '../components/ActiveOpportunities';
import CompletedOpportunities from '../components/CompletedOpportunities';

import {ScrollView, View} from 'react-native';
import BottomNavigation from './BottomNavigation';
import axios from 'axios';
import {Badge, Box, Center, NativeBaseProvider, Progress} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import OpportunityCard from '../components/OpportunityCard';

const Home = () => {
  const navigation = useNavigation();

  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {active, completed} = useData();

  const {colors, fonts, sizes} = useTheme();
  const [activeOpportunities, setActiveOpportunities] = useState([]);
  const [completedOpportunities, setCompletedOpportunities] = useState([]);


  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
    },
    [active, completed, setTab],
  );

  const fetchActiveOpportunities = async () => {
    const {data} = await axios.post(
      'http://172.16.16.92:7580/api/mobile/opportunity/active-list',
    );

    const ActOpp = JSON.parse(data.Content);
    setActiveOpportunities(ActOpp);
  };

  const fetchCompletedOpportunities = async () => {
    const {data} = await axios.post(
      'http://172.16.16.92:7580/api/mobile/opportunity/completed-list',
    );

    const ComOpp = JSON.parse(data.Content);
    setCompletedOpportunities(ComOpp);
  };

  useEffect(() => {
    fetchActiveOpportunities();
    fetchCompletedOpportunities();
  }, []);

  return (
    <>
      <ScrollView>
        <Block
          color={'#f8f9fa'}
          align={'center'}
          paddingTop={sizes.sm}
          flex={0.9}>
          <Text h4 semibold bold>
            {t('home.opportunities')}
          </Text>

          <Block
            row
            flex={0}
            align="center"
            justify="center"
            color={'#f8f9fa'}
            paddingBottom={sizes.sm}
            marginHorizontal={5}>
            <Button onPress={() => handleProducts(0)}>
              <Block row align="center">
                <Text
                  p
                  color={'#00a69c'}
                  style={
                    tab === 0
                      ? {textDecorationLine: 'underline'}
                      : {textDecorationLine: 'none'}
                  }
                  font={fonts?.[tab === 0 ? 'medium' : 'normal']}>
                  {t('home.active')}
                </Text>
              </Block>
            </Button>
            <Block
              gray
              flex={0}
              width={1}
              marginHorizontal={sizes.sm}
              height={sizes.socialIconSize}
            />
            <Button onPress={() => handleProducts(1)}>
              <Block row align="center">
                <Text
                  p
                  color={'#00a69c'}
                  style={
                    tab === 1
                      ? {textDecorationLine: 'underline'}
                      : {textDecorationLine: 'none'}
                  }
                  font={fonts?.[tab === 1 ? 'medium' : 'normal']}>
                  {t('home.completed')}
                </Text>
              </Block>
            </Button>
          </Block>
          {tab === 0 ? (
            <ScrollView style={{width: '100%'}}>
              <Block paddingHorizontal={sizes.sm}>
                {activeOpportunities.map((index) => {
                  return (
                    <OpportunityCard
                      key={index.CampaignId}
                      header={index.HeaderUrl}
                      logo={index.LogoUrl}
                      name={index.Name}
                      category={index.Category}
                      categoryArabic={index.CategoryArabic}
                      description={index.Description}
                      sharePrice={index.SharePrice}
                      valuation={index.ValuationPrice}
                      investors={index.InvestorCount}
                      raisedAmount={index.FundAcquired}
                      targetAmount={index.InvestmentRequired}
                      remainingDays={index.DaysRemaining}
                      id={index.Id}
                    />
                  );
                })}
              </Block>
            </ScrollView>
          ) : (
            <ScrollView style={{width: '100%'}}>
              <Block paddingHorizontal={sizes.sm}>
                {completedOpportunities.map((index) => {
                  return (
                    <OpportunityCard
                      key={index.CampaignId}
                      name={index.Name}
                      header={index.HeaderUrl}
                      logo={index.LogoUrl}
                      category={index.Category}
                      categoryArabic={index.CategoryArabic}
                      description={index.Description}
                      sharePrice={index.SharePrice}
                      valuation={index.ValuationPrice}
                      investors={index.InvestorCount}
                      raisedAmount={index.FundAcquired}
                      targetAmount={index.InvestmentRequired}
                      remainingDays={index.DaysRemaining}
                      id={index.Id}
                    />
                  );
                })}
              </Block>
            </ScrollView>
          )}
        </Block>
      </ScrollView>

      <View style={{marginTop: 50}}>
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}>
          <BottomNavigation tab={1} />
        </View>
      </View>
    </>
  );
};

export default Home;
