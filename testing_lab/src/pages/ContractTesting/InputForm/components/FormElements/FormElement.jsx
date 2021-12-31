import React, { useState } from "react";
import { BigNumber, ethers } from 'ethers'
import {
  Flex,
  Text,
  Input,
  Stack,
  Switch,
  Radio,
  RadioGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";



const Element = (props) => {

  const [value, setValue] = useState({
    radio: "false",
    num: 0
  })

  const updateValue = (val, type) => {

    setValue({
      ...value,
      [type]: val
      // [type]: ethers.utils.parseUnits(val, 'ether')
    })
  }


  const handleETHUnits = (e) => {
    console.log(value.num, 'good1')

    if (value.num === 0) return

    console.log(e.target.checked, 'good2')


    let parsedValue;


    e.target.checked
      ? parsedValue = ethers.utils.parseEther(value.num)
      : parsedValue = ethers.utils.formatUnits(value.num)

    console.log(parsedValue, 'good3')
    console.log(value.num, 'good4')
    console.log(parsedValue.toString(), 'good5')

    updateValue(parsedValue.toString(), 'num')
  }

  switch (props.type) {
    case "string":
    case "address":
      return (
        <Flex>
          <Input
            w="75%"
            id={props.name}
            label={props.name}
            {...props.register(props.name)}
            placeholder={`Enter ${props.name}`}
          />
        </Flex>
      )
    case "bool":
      return (
        <Flex>
          <RadioGroup
            id={props.name}
            label={props.name}
            value={value.radio}
            onChange={(e) => updateValue(e, 'radio')}
          >
            <Stack direction="row">
              <Radio
                value={"false"}
                {...props.register(props.name)}
              >
                No
              </Radio>
              <Radio
                value={"true"}
                {...props.register(props.name)}
              >
                Yes
              </Radio>
            </Stack>
          </RadioGroup >
        </Flex>
      );
    case "uint256":
      return (
        // <Flex>

        <Flex>
          <NumberInput
            mr="2rem"
            maxW="100px"
            value={value.num}
            {...props.register(props.name)}
            onChange={(e) => updateValue(e, 'num')}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
        //   {/* <Flex flexDir="column">
        //     <Text> Parse As ETH Units?</Text>
        //     <Switch
        //       value={value.num}
        //       onChange={(e) => handleETHUnits(e)}
        //     />
        //   </Flex>
        // </Flex> */}
      )
    // const price = ethers.utils.parseUnits(sellPrice, 'ether')
    default:
      console.log(`Error: ${props.type} not supported`)
      return (
        <Text>
          {`Error: ${props.type} not supported`}
        </Text>
      )
  }
};

export default Element;
