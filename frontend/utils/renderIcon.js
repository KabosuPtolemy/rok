import {
  GiFoxHead,
  GiAnubis,
  GiAngularSpider,
  GiBearFace,
  GiBrute,
  GiLabradorHead,
  GiMountaintop,
} from "react-icons/gi"
import { FaWolfPackBattalion, FaEthereum, FaBitcoin } from "react-icons/fa"
import { SiDogecoin } from "react-icons/si"
import Jazzicon from "react-jazzicon"

export const renderIcon = (selectedIcon, selectedColor, address, size) => {
  if (selectedIcon === "jazzicon") {
    return (
      <Jazzicon
        diameter={size}
        seed={address}
        paperStyles={{ cursor: "pointer" }}
      />
    )
  } else if (selectedIcon === "fox") {
    return (
      <GiFoxHead
        size={size}
        color={selectedColor}
        paperStyles={{ cursor: "pointer" }}
      />
    )
  } else if (selectedIcon === "wolf") {
    return (
      <FaWolfPackBattalion
        size={size}
        color={selectedColor}
        paperStyles={{ cursor: "pointer" }}
      />
    )
  } else if (selectedIcon === "ethereum") {
    return (
      <FaEthereum
        size={size}
        color={selectedColor}
        paperStyles={{ cursor: "pointer" }}
      />
    )
  } else if (selectedIcon === "bitcoin") {
    return (
      <FaBitcoin
        size={size}
        color={selectedColor}
        paperStyles={{ cursor: "pointer" }}
      />
    )
  } else if (selectedIcon === "dogecoin") {
    return (
      <SiDogecoin
        size={size}
        color={selectedColor}
        paperStyles={{ cursor: "pointer" }}
      />
    )
  } else if (selectedIcon === "anubis") {
    return (
      <GiAnubis
        size={size}
        color={selectedColor}
        paperStyles={{ cursor: "pointer" }}
      />
    )
  } else if (selectedIcon === "spider") {
    return (
      <GiAngularSpider
        size={size}
        color={selectedColor}
        paperStyles={{ cursor: "pointer" }}
      />
    )
  } else if (selectedIcon === "bear") {
    return (
      <GiBearFace
        size={size}
        color={selectedColor}
        paperStyles={{ cursor: "pointer" }}
      />
    )
  } else if (selectedIcon === "brute") {
    return (
      <GiBrute
        size={size}
        color={selectedColor}
        paperStyles={{ cursor: "pointer" }}
      />
    )
  } else if (selectedIcon === "dog") {
    return (
      <GiLabradorHead
        size={size}
        color={selectedColor}
        paperStyles={{ cursor: "pointer" }}
      />
    )
  } else if (selectedIcon === "mountain") {
    return (
      <GiMountaintop
        size={size}
        color={selectedColor}
        paperStyles={{ cursor: "pointer" }}
      />
    )
  } else {
    return <div>No Icon</div>
  }
}
