import pandas as pd

df = pd.read_csv('./my_data.csv')

df.rename(columns={'Unnamed: 0': 'Renamed'}, inplace=True)

df.drop(columns=df.columns[0], inplace=True)

name_to_korean = {
    'Alice': '앨리스',
    'Bob': '밥',
    'Charlie': '찰리',
    'james': '제임스'
}

df['name'] = df['name'].map(name_to_korean)

df['salary'] = df['salary'].map('{:,}'.format)

df.to_csv("my_data2.csv", index=False)
