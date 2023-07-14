import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { FiChevronDown } from 'react-icons/fi';
import { useRouter } from 'next/router';
import styles from "../../styles/pages/branch.module.scss";

type Props = {
    currentBranch: string;
    icon?: JSX.Element;
    branchList: string[];
}

export default function CustomDropdown({currentBranch, icon, branchList} : Props) {
    const [branch, setBranch] = useState(currentBranch);
    const router = useRouter();

    const handleChange = (event: SelectChangeEvent) => {
        event.preventDefault();
        setBranch(event.target.value as string);
        router.push(`${event.target.value as string}`)
    }

    return (
        <FormControl sx={{ m: 1, mx: 2 }} variant="standard">
            <Select
                input={<BootstrapInput />} 
                value={branch}
                onChange={handleChange}  
                IconComponent={FiChevronDown}
            >
                {
                    branchList.map((branch: any, id: number) => 
                        <MenuItem value={branch} key={id}>
                            <span className={styles.dropDownText}>{branch}</span>
                        </MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 7,
        backgroundColor: '#fff',
        position: 'relative',
        border: '1px solid #c4c4c5',
        fontSize: 16,
        padding: '5px',
    },
    '.MuiSelect-select': {
        margin: '-5px'
    },
    '.MuiFormControl-root': {
        borderRadius: 7,
        backgroundColor: '#fff'
    }
}))