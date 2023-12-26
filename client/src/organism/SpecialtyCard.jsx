import { Flexbox } from '@atoms';
import { Text } from '@atoms';
import { Card } from '@atoms';
import { sizes } from '@base';
import { colors } from '@base';
import { ValueBackround } from '@atoms';


export const SpecialtyCard = () => {
  return (
    <Card padding="30px" display="flex" width="fit-content" bgColor={colors.cardMainBg} >
      <Flexbox direction="column" gap="22px" align="start">
        <Flexbox justify="space-between" width="100%">
          <Text fontWeight={400} color={colors.black} fontSize={'19px'} >Дата поступления</Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="8px 20px">
            <Text fontWeight={400} color={colors.black} fontSize={'19px'} >010722547645</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text fontWeight={400} color={colors.black} fontSize={'19px'} >Группа </Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="8px 20px ">
            <Text fontWeight={400} color={colors.black} fontSize={'19px'}>22-07-2001</Text>
          </ValueBackround >
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text fontWeight={400} color={colors.black} fontSize={'19px'} >Вид финансирования</Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="8px 20px ">
            <Text fontWeight={400} color={colors.black} fontSize={'19px'}>Женский</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text fontWeight={400} color={colors.black} fontSize={'19px'} >Обучение по квоте</Text>
          <ValueBackround width='600px'margin="0px 3px 0px 40px" padding="8px 20px ">
            <Text fontWeight={400} color={colors.black} fontSize={'19px'}>Женский</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text fontWeight={400} color={colors.black} fontSize={'19px'} >Серия свидетельства о гранте</Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="8px 20px ">
            <Text fontWeight={400} color={colors.black} fontSize={'19px'}>Женский</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text fontWeight={400} color={colors.black} fontSize={'19px'} >Номер свидетельства о гранте</Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="8px 20px ">
            <Text fontWeight={400} color={colors.black} fontSize={'19px'}>Женский</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text fontWeight={400} color={colors.black} fontSize={'19px'} >Дата присуждения гранта</Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="8px 20px ">
            <Text fontWeight={400} color={colors.black} fontSize={'19px'}>Женский</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text fontWeight={400} color={colors.black} fontSize={'19px'} >Сертификат гранта</Text>
          <ValueBackround width='600px' margin="0px 3px 0px 40px" padding="8px 20px ">
            <Text fontWeight={400} color={colors.black} fontSize={'19px'}>Женский</Text>
          </ValueBackround>
        </Flexbox>
        
      </Flexbox>
    </Card>
  );
};