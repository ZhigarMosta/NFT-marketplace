import Image from "next/image";
import "./table.scss";
const Table = ({ data }) => {
  return (
    <div className="wrapper_table">
      <table>
        <tr className="headerTable">
          <th className="id">
            <p className="text_head">#</p>
          </th>
          <th className="artist">
            <p className="text_head">Artist</p>
          </th>
          <th className="change">
            <p className="text_head">Change</p>
          </th>
          <th className="nftsSold">
            <p className="text_head">NFTs Sold</p>
          </th>
          <th className="volume">
            <p className="text_head">Volume</p>
          </th>
        </tr>
        {data &&
          data.map((item) => (
            <tr className="background" key={item.id}>
              <td className="id">
                <div className="wrapperId">
                  <p className="text_main">{item.id}</p>
                </div>
              </td>
              <td className="artist">
                <div className="blockArtist">
                  <Image src={item.userLogo} alt="" />
                  <p className="text_main">{item.UserName}</p>
                </div>
              </td>
              <td className="change">
                <p className="text_main font_change_table">{item.change}</p>
              </td>
              <td className="nftsSold">
                <p className="text_main font_change_table">{item.nftSold}</p>
              </td>
              <td className="volume">
                <p className="text_main font_change_table">{item.volume}</p>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Table;
