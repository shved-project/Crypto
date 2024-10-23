import {useState} from "react";
import {Select, Space, Typography, Flex} from "antd";

import {useCrypto} from "../context/crypto-context";

export default function AddAssetForm() {
	const [coin, setCoin] = useState(null);
	const {crypto} = useCrypto();

	if (!coin) {
		return (
			<Select
				style={{width: "100%"}}
				onSelect={(value) => setCoin(crypto.find((c) => c.id === value))}
				placeholder='Select coin'
				options={crypto.map((coin) => ({
					label: coin.name,
					value: coin.id,
					icon: coin.icon,
				}))}
				optionRender={(option) => (
					<Space>
						<img src={option.data.icon} alt={option.data.label} style={{width: 20}} /> {option.data.label}
					</Space>
				)}
			/>
		);
	}

	return (
		<form>
			<Flex alignItems={"center"} gap={10}>
				<img src={coin.icon} alt={coin.name} style={{width: 40}} />
				<Typography.Title level={2} style={{margin: 0}}>
					({coin.symbol}) {coin.name}
				</Typography.Title>
			</Flex>
			<Typography.Title level={2} style={{margin: 0}}>
				{coin.name}
			</Typography.Title>
		</form>
	);
}
